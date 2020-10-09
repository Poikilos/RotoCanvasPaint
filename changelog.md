# Changelog
All notable changes to this project will be documented in this file.


## [git] - 2020-10-07
### Changed
- (examples.blend) Upgrade blend to 2.83.5 (Paste objects into a new
  file).

### Fixed
- (examples.blend) Turn on "Soft Shadows" render option to avoid
  large aliasing artifacts on shadows.
- Calculate and change brush hardness correctly.


## [git] - 2019-06-28
### Added
- Add potential references from local directories.
- Add note regarding new documents to README.md.
- Add backgrounds to dist for future use.

### Changed
- Name and sort documents better.
- Wrap lines in README.md, use markdown more, make file more navigable,
  remove local paths and mention installing CLI commands in Windows and
  adding them to the PATH.

## [unreleased] - 2016-08-05
### Changed
- Detect format instead of ever using the strings "png" or ".png" during
  loading (but continue to use png for all saved image data, as
  nondestructive layers)
