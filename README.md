# RotoCanvas

## Purpose
This is a manual rotoscoping (frame by frame painting) application. Rotoscoping is the only accurate way to achieve effects such as manual object removal (such as removing wires for flying scenes), cartoons mixed with live action, correction of layer order errors (such as if the wrong fingers get in the way of a virtual object that is held), doing energy effects without 3D mockups of characters (3D mockups are normally needed in order to address situations where part or all of the energy effect goes behind a character or some of the character's fingers), or detailed junk matte tweaking (such as is needed when all or part of an actor appears in front of a studio wall instead of a green screen). Before the digital age, these issues were address by hand, and rotoscoping was considered an essential part of post effects to address a whole domain of issues. The fact that there are so few applications like this is a shame. Ideally this project will be used as a basis to create plugins (see Developer Notes) so that more video editing applications will include rotoscoping, however, RotoCanvas is being tested and compiled as standalone application so that the software can be used immediately.

### Why aren't there more rotoscoping applications?
Possibly, rotoscoping applications are not considered commercially viable since there is unavoidable lag situations that can't be reasonably blamed on developers but inevitably are (see "Caveats" below). Unavoidable lag and format complexity issues could be reasons for the discontinuation of such programs as Ulead &reg; VideoPaint &#174;. Another reason could be that rotoscoping is highly dependent on the source frame remaining the same, whereas MPEG (variants of which are used almost everywhere) has inherently inexact frame seeking. These issues may be partially or completely resolved by advanced caching (for the lag issue) and advanced frame seeking algorithms (for the accuracy issue), either of which are not easily achieved but both of which are needed in a professional video application (since video, which has slow seeking would be required, and MPEG, which is normally inaccurate would be required). Even if image sequences are used to resolve the seek lag and seek accuracy issues, seek lag normally remains simply because the edits have to be re-applied or re-loaded (basically, a multi-layer image project needs to be loaded each time seeking to a different frame). Leaving rotoscoping out entirely is often seen as the only way to avoid these issues. This program aims to implement rotoscoping regardless of the possibility of seek lag or requiring image sequences (to avoid seek accuracy issues), since in this project, rotoscoping is considered to be an essential feature. 

## Caveats
* Lag during frame loading cannot be avoided, since each video frame must be loaded at full quality, which at 1080p takes up an unavoidable 8100kb per layer. Maximum performance could be achieved when one or more frames in either direction of the current frame are cached, in their edited form. However, upon editing, the cache will have to be updated and the image, redrawn. To prevent further lag in that situation, the source frame (base layer) could be cached so that editing layers can be applied without reloading the frame from the source video file.
* At this time, image sequences are required. MPEG-derived formats may or may not ever be added, since MPEG-style frame seeking is inexact and rotoscoping is highly dependent on the source frame remaining the same.

## Known Issues
* not yet done first working version (expected August 2016)
* initially will only input and output png sequences.
* layer cache (purpose for unused variable cacheMaxMB) is not yet implemented

## Developer Notes
The RotoCanvas (based  on ScribbleArea from Qt Examples) class is modular, with hopes that it can be used by various video editing applications in the future. The recommended use of RotoCanvas in a video editing application is for applying effects to source media as a preprocessing step before they are trimmed or other effects are added, since rotoscoping is highly dependent on the source frame (base layer) remaining the same.  Using the RotoCanvas as a post-processing effect is possible, but accurate frame seeking must be assured somehow (such as by a frame-accurate video editing engine), and further edits to the previous layers will in some cases cause the rotoscoped parts (parts of the image edited by RotoCanvas) to no longer make sense (such as, if a lens pinch effect is added to a scene where there was a layer order error that has been rotoscoped out, instead of the error being rotoscoped out, there will be both the error and a corrected blotch that is the error's original position & shape), which in such cases would require redoing the rotoscoping.

### Storage Method
where <sequenceName> is sequence name (such as, if mygreatvideo0000.png is first frame, <sequenceName> is mygreatvideo)
<sequenceName> [folder]
	rotocanvas.yml [not yet implemented]
	frames [folder]
		<frameNumber> [folder; only exists if frame is a keyframe]
			alpha.png [file where only alpha channel is used (and applied to background upon export)]
			layers [folder]
				<layerNumber>.png
				<layerNumber>.yml [not yet implemented]
				
				