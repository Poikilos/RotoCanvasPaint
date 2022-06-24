# RotoCanvasPaint Development


You can feel free to use the code according to the license, but the project has been replaced by:

[rotocanvas](https://github.com/poikilos/rotocanvas)).


## Known Issues
* Audit & test `getLayerImagePathMostRecent`.


## Low-priority Known Issues
* drawLineTo (this is used for painting) should draw line instead of
  last point


## Developer Notes
The RotoCanvas class is modular, with hopes that it can be used by
various video editing applications in the future. The recommended use
of RotoCanvas in a video editing application is for applying effects
(primarily manual rotoscoping) to source videos (as frame sequences) as
a preprocessing step before they are trimmed or other effects are
added, since rotoscoping is highly dependent on the source frame (base
layer) remaining the same.  Using the RotoCanvas as a post-processing
effect is possible, but accurate frame seeking must be assured somehow
(such as by a frame-accurate video editing engine), and further edits
to the previous layers will in some cases cause the rotoscoped parts
(parts of the image edited by RotoCanvas) to no longer make sense (such
as, if a lens pinch effect is added to a scene where there was a layer
order error that has been rotoscoped out, instead of the error being
rotoscoped out, there will be both the error and a corrected blotch
that is the error's original position & shape), which in such cases
would require redoing the rotoscoping.

### Alternate names
See "~/Nextcloud/d.cs/RotoCanvas/1.RotoCanvas (SEE GitHub instead).txt".


### RotoCanvas Paint Notes
* The save method is used by both the Save and the Save As actions. The
  save sender is pre-programmed with the format property


## Notes on Other Programs
* In some programs, ss;ff denotes drop frame, and ss:ff denotes NON-drop
  frame.
* mplayer is included in megui in the mencoder folder
* Change aspect ratio flag:
  Use DVD Patcher, then test the result by dropping into Sony DVD
  Architect Studio to and playing (will play at specified aspect ratio)

### Get CLI Video Utilities on Windows
(Command-line Interface)
#### ffmpeg
* Install WinFF and add C:\Program Files (x86)\WinFF\ffmpeg.exe to the
  PATH variable, or whatever path to which you installed it.
  - Or, download gui4ffmpeg and unzip it to C:\PortableApps\Video, and
    add C:\PortableApps\Video\gui4ffmpeg to your PATH variable.

#### mplayer & mencoder
* Get **MPlayer for Windows** and add the MPlayer directory to your PATH
  variable. (If you have IntegratorEduImport, you can add
  `%USERPROFILE%\Documents\Projects\IntegratorEduImport\bin\MPlayer`
  to your PATH).
  - or download and unzip **megui** to `C:\PortableApps\Video` and add
    `C:\PortableApps\Video\megui\tools\mencoder` to your PATH.
