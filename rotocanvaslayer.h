#ifndef ROTOCANVASLAYER_H
#define ROTOCANVASLAYER_H

#include <QObject>
#include <QImage>

class RotoCanvasLayer : public QObject
{
    Q_OBJECT
public:
    explicit RotoCanvasLayer(QObject *parent = 0);
    //bool loadFrame(QString setSequenceName, int setFrameNumber, int minDigitCount);
    bool isModified;
    int frameNumber; //source of keyframe in case an earlier keyframe is still visible
    QImage image;
signals:

public slots:

private:
};

#endif // ROTOCANVASLAYER_H
