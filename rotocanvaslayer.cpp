#include "rotocanvaslayer.h"

RotoCanvasLayer::RotoCanvasLayer(QObject *parent) : QObject(parent)
{
    isModified=true;
    frameNumber=-1;
}
