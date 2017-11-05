# RotoCanvas

## Purpose
This is a manual rotoscoping (frame by frame painting) application. Rotoscoping is the only accurate way to achieve effects such as manual object removal (such as removing wires for flying scenes), cartoons mixed with live action, correction of layer order errors (such as if the wrong fingers get in the way of a virtual object that is held), doing energy effects without 3D mockups of characters (3D mockups [invisible blockers] are normally needed in order to address situations where part or all of the energy effect goes behind a character or some of the character's fingers), or detailed junk matte tweaking (such as is needed when all or part of an actor appears in front of a studio wall instead of a green screen). Before the digital age, these issues were addressed by hand, and rotoscoping was considered an essential part of post effects to address a whole domain of issues. The fact that there are so few applications like this has become an obstacle. Ideally this project will be used as a basis to create plugins (see Developer Notes) so that more video editing applications will include rotoscoping, in this case *nondestructive rotoscoping. RotoCanvas is being tested and compiled in a standalone application ("RotoCanvas Paint") so that the software can be used right away.

### Why aren't there more rotoscoping applications?
Possibly, rotoscoping applications are not considered commercially viable since there is unavoidable lag situations that can't be reasonably blamed on developers but inevitably are (see "Caveats" below). Unavoidable lag and video format complexity issues could be reasons for the discontinuation of such programs as Ulead &reg; VideoPaint &#174; (this project is not affiliated with Corel &reg; or Ulead &reg;). Another reason could be that rotoscoping is highly dependent on the source frame remaining the same, whereas MPEG (variants of which are used almost everywhere) has inherently inexact frame seeking. These issues may be partially or completely resolved by advanced caching (for the lag issue) and advanced frame seeking algorithms (for the accuracy issue), either of which are not easily achieved but both of which are needed in a professional video application (since video, which has slow seeking would be required, and MPEG, which is normally inaccurate would be required). Even if image sequences are used to resolve the seek lag and seek accuracy issues, seek lag normally remains simply because the edits have to be re-applied or re-loaded (basically, a multi-layer image project needs to be loaded each time seeking to a different frame). Leaving rotoscoping out entirely is often seen as the only way to avoid these issues. This program aims to implement rotoscoping regardless of the possibility of seek lag or requiring image sequences (to avoid seek accuracy issues). In this project, rotoscoping (the core feature) is considered to be an indispensable part of video editing, regardless of the fact that meeting the expectations of normal consumers (primarily expectations for speed and format support) may be impractical to be achieved by volunteer programmers, or may be impossible for technical reasons described above. 

## Changes
* (2016-08-05) detect format instead of ever using the strings "png" or ".png" during loading (but continue to use png for all saved image data, as nondestructive layers)

## Caveats
* Lag during frame loading cannot be avoided, since each video frame must be loaded at full quality, which at 1080p takes up an unavoidable 8100kb per layer. Maximum performance could be achieved when one or more frames in either direction of the current frame are cached, in their edited form. However, upon editing, the cache will have to be updated and the image, redrawn. To prevent further lag in that situation, the source frame (base layer) could be cached so that editing layers can be applied without reloading the frame from the source video file.
* At this time, image sequences are required. MPEG-derived formats may or may not ever be added, since MPEG-style frame seeking is inexact and rotoscoping is highly dependent on the source frame remaining the same.

## Known Issues
* complete first working version
* audit & test getLayerImagePathMostRecent

## Planned Features
* add markers to media OR timeline, separately (media markers are also on timeline behave differently: ghosted until media is selected, has filmstrip icon if from a clip; reversed if video is reversed, changed placement if speed is changed, etc)
* use alpha.png for reducing opacity of parts of background layer
* allow blocker layer type (make an animated object that seems to "undo" previous edits, such as to reveal parts of characters under the effect, without permanently erasing any part of the effect)
* use layer cache (purpose for unused variable cacheMaxMB)
* Keyboard controls for fast operation:
	Ctrl Scrollwheel: zoom
	Shift Alt Scrollwheel: brush hardness
	Shift Scrollwheel: brush size
* Add exception handling in appropriate situations:
catch(std::exception& e) {
      qCritical() << "Exception thrown:" << e.what();
    }
	
## Low-priority Known Issues
* drawLineTo (this is used for painting) should draw line instead of last point


## Developer Notes
* The RotoCanvas class is modular, with hopes that it can be used by various video editing applications in the future. The recommended use of RotoCanvas in a video editing application is for applying effects (primarily manual rotoscoping) to source videos (as frame sequences) as a preprocessing step before they are trimmed or other effects are added, since rotoscoping is highly dependent on the source frame (base layer) remaining the same.  Using the RotoCanvas as a post-processing effect is possible, but accurate frame seeking must be assured somehow (such as by a frame-accurate video editing engine), and further edits to the previous layers will in some cases cause the rotoscoped parts (parts of the image edited by RotoCanvas) to no longer make sense (such as, if a lens pinch effect is added to a scene where there was a layer order error that has been rotoscoped out, instead of the error being rotoscoped out, there will be both the error and a corrected blotch that is the error's original position & shape), which in such cases would require redoing the rotoscoping.
### RotoCanvas Paint Notes
* The save method is used by both the Save and the Save As actions. The save sender is pre-programmed with the format property

### Storage Method
Folder and file structure is as follows, where `<sequenceName>` is sequence name (such as, if mygreatvideo0000.png is first frame, `<sequenceName>` is mygreatvideo) and where the base folder (containing `<sequenceName>` folder) is the folder where the images in an image sequence are stored:

```
<sequenceName> [folder]
	rotocanvas.yml [not yet implemented]
	frames [folder]
		<frameNumber> [folder; only exists if frame is a keyframe]
			alpha.png [file where only alpha channel is used (and applied to background upon export)--
			alpha is stored separately so when background is edited, only edits are saved (to layer 0),
			reducing storage use; then alpha is applied]
			layers [folder]
				<layerNumber>.png
				<layerNumber>.yml [not yet implemented]
```
				
## Credits
* created by expertmm (see also LICENSE)
* special thanks to the Qt team for ScribbleArea from Qt Examples

*DISCLAIMER: This software comes without warranty or guarantees of any kind. Use this software at your own risk.
