#include <QtWidgets>
#ifndef QT_NO_PRINTER
#include <QPrinter>
#include <QPrintDialog>
#endif

#include "rotocanvas.h"

//! [0]
RotoCanvas::RotoCanvas(QWidget *parent)
    : QWidget(parent)
{
    setAttribute(Qt::WA_StaticContents);
    isModified = false;
    isToolActive = false;
    selectedLayerIndex = -1;
    //frameNumber = -1;
    //minDigitCount = 4;
    cacheMaxMB = 800.0; //NOTE: 1920*1080*4 = 8294400 = ~7.91 MB, so 800MB is around 100 HD frames
    brushRadius = 5.0;
    brushHardRadius = 0.0;
    brushOpacity = 1.0;
    //formatString = "";
    brushColor = QColor(35,97,20,255); //Qt::green;
    //Pigment Ajans green screen color: 0,203,27
    //Expert Multimedia Green Screen Color (LED lighting, muslin green screen): 35,97,20
    checkerDarkColor = QColor(128,128,128);
    checkerLightColor = QColor(192,192,192);
    outputSize.setWidth(0);
    outputSize.setHeight(0);
    loadedFI=nullptr;
    selectedLayerIndex=0;
}

QString RotoCanvas::getSeqName(QString framePath)
{//static
    //QString result;
    QFileInfo frameFI(framePath);
    return RotoCanvas::getSeqName(frameFI);
}

QString RotoCanvas::getSeqName(QFileInfo frameFI)
{
    QString result;
    QString baseName=frameFI.completeBaseName(); //baseName would get file from file.tar.gz, completeBaseName gets file.tar
    result=baseName;
    return result;
}

QString RotoCanvas::getSeqName()
{
    if (this->loadedFI!=nullptr) return RotoCanvas::getSeqName(*this->loadedFI);
    else return "";
}

QString RotoCanvas::getSeqFormatString(QString framePath)
{
    //QString result;
    QFileInfo frameFI(framePath);
    return RotoCanvas::getSeqFormatString(frameFI);
}

QString RotoCanvas::getSeqFormatString(QFileInfo frameFI)
{
    QString result=frameFI.suffix();
    return result;
}

QString RotoCanvas::getSeqFormatString()
{
    if (this->loadedFI!=nullptr) return RotoCanvas::getSeqFormatString(*this->loadedFI);
    else return "";
}

QString RotoCanvas::getFolderPath(QString framePath)
{
    QString result;
    QFileInfo frameFI(framePath);
    return RotoCanvas::getFolderPath(frameFI);
}

QString RotoCanvas::getFolderPath(QFileInfo frameFI)
{
    QString result=frameFI.absoluteDir().path();
    return result;
}

QString RotoCanvas::getFolderPath()
{
    if (this->loadedFI!=nullptr) RotoCanvas::getFolderPath(*this->loadedFI);
    else return "";
}

QString RotoCanvas::getSeqPaddedFrameNumber(QString framePath)
{
    //QString result;
    QFileInfo frameFI(framePath);
    return RotoCanvas::getSeqPaddedFrameNumber(frameFI);
}

QString RotoCanvas::getSeqPaddedFrameNumber(QFileInfo frameFI)
{
    QString baseName=frameFI.completeBaseName();
    int digitCount=RotoCanvas::getSeqDigitCount(frameFI);
    QString result=baseName.right(digitCount);
    return result;
}

QString RotoCanvas::getSeqPaddedFrameNumber()
{
    if (this->loadedFI!=nullptr) RotoCanvas::getSeqPaddedFrameNumber(*this->loadedFI);
    else return "";
}

QString RotoCanvas::getLayersFolderPath(QString framePath, int frameNumber, bool createEnable)
{
    //QString result;
    QFileInfo frameFI(framePath);
    return RotoCanvas::getLayersFolderPath(frameFI, frameNumber, createEnable);
}

QString RotoCanvas::getLayersFolderPath(QFileInfo frameFI, int frameNumber, bool createEnable)
{
    //such as <sequenceName>/frames/<frameNumber>/layers
    QString seqName=RotoCanvas::getSeqName(frameFI);
    qInfo() << "seqName:" << seqName; //see also qInfo,qDebug,qWarning,qCritical,qFatal
    QString seqPath=frameFI.dir().filePath(seqName);
    QDir seqDir(seqPath);
    if (createEnable) {
        if (!seqDir.exists()) frameFI.dir().mkdir(seqName);
    }
    QString framesPath=frameFI.dir().filePath("frames");
    qInfo()<<"framesPath:"<<framesPath;
    QDir framesDir(framesPath);
    if (createEnable) {
        if (!framesDir.exists()) seqDir.mkdir("frames");
    }
    QString thisFramePath=framesDir.filePath(QString::number(frameNumber));
    qInfo()<<"thisFramePath:"<<thisFramePath;
    QDir thisFrameDir=QDir(thisFramePath);
    if (createEnable) {
        if (!thisFrameDir.exists()) framesDir.mkdir(QString::number(frameNumber));
    }
    QString layersPath=QDir(thisFramePath).filePath("layers");
    qInfo()<<"layersPath:"<<layersPath;
    QDir layersDir=QDir(layersPath);
    if (createEnable) {
        if (!layersDir.exists()) thisFrameDir.mkdir("layers");
    }
    return layersPath;
}

QString RotoCanvas::getLayersFolderPath(int frameNumber, bool createEnable)
{
    if (this->loadedFI!=nullptr) return RotoCanvas::getLayersFolderPath(*this->loadedFI, frameNumber, createEnable);
    else return "";
}

QString RotoCanvas::getLayerImagePathMostRecent(QString framePath, int frameNumber, int layerNumber)
{
    //QString result;
    QFileInfo frameFI(framePath);
    return RotoCanvas::getLayerImagePathMostRecent(frameFI, frameNumber, createEnable);
}

QString RotoCanvas::getLayerImagePathMostRecent(QFileInfo frameFI, int frameNumber, int layerNumber)
{
    QString result="";
    QString layersPath=RotoCanvas::getLayersFolderPath(frameFI,frameNumber,false);
    QDir layersDir(layersPath);
    QString thisLayerImagePath=layersDir.filePath(QString::number(layerNumber)+".png");
    QFileInfo thisLayerImageFI(thisLayerImagePath);
    int thisFrameNumber=frameNumber;
    while (thisFrameNumber>=0 && !thisLayerImageFI.exists()) {
        layersPath=RotoCanvas::getLayersFolderPath(frameFI,frameNumber,false);
        layersDir=QDir(layersPath);
        thisLayerImagePath=layersDir.filePath(QString::number(layerNumber)+".png");
        thisLayerImageFI=QFileInfo(thisLayerImagePath);
        thisFrameNumber--;
    }
    if (thisLayerImageFI.exists()) result=thisLayerImageFI.path();
    return result;
}

QString RotoCanvas::getLayerImagePathMostRecent(int frameNumber, int layerNumber)
{
    if (this->loadedFI!=nullptr) return RotoCanvas::getLayerImagePathMostRecent(*this->loadedFI, frameNumber, layerNumber);
    else return "";
}

int RotoCanvas::getSeqFrameNumber(QString framePath)
{
    int result=-1;
    QString resultString=RotoCanvas::getSeqPaddedFrameNumber(framePath);
    while (resultString.length()>0 && resultString.left(1)=="0") {
        resultString=resultString.right(resultString.length()-1);
    }
    bool ok=false;
    result = resultString.toInt(&ok);
    if (!ok) result=-1;
    return result;
}

int RotoCanvas::getSeqFrameNumber(QFileInfo frameFI)
{
    int result=-1;
    QString resultString=RotoCanvas::getSeqPaddedFrameNumber(frameFI);
    while (resultString.length()>0 && resultString.left(1)=="0") {
        resultString=resultString.right(resultString.length()-1);
    }
    bool ok=false;
    result = resultString.toInt(&ok);
    if (!ok) result=-1;
    return result;
}

int RotoCanvas::getSeqFrameNumber()
{
    if (this->loadedFI!=nullptr) return RotoCanvas::getSeqFrameNumber(*this->loadedFI);
    else return -1;
}

int RotoCanvas::getSeqDigitCount(QString framePath)
{
    QString result;
    QFileInfo frameFI(framePath);
    return RotoCanvas::getSeqDigitCount(frameFI);
}

int RotoCanvas::getSeqDigitCount(QFileInfo frameFI)
{
    int result=-1;
    QString baseName=frameFI.completeBaseName();
    int digitCount=0;
    int index=baseName.length()-1;
    while (index>=0) {
        if (baseName.at(index).isDigit()) {
            index--;
            digitCount++;
        }
        else {
            break;
        }
    }
    if (digitCount>0) result=baseName.left(baseName.length()-digitCount).toInt();
    return result;
}

int RotoCanvas::getSeqDigitCount()
{
    if (this->loadedFI!=nullptr) return RotoCanvas::getSeqDigitCount(*this->loadedFI);
    else return -1;
}

QString RotoCanvas::getSeqFramePath(QString folderPath, QString seqName, int frameNumber, int minDigitCount, QString format)
{
    QString fileName=seqName+RotoCanvas::getZeroPadded(frameNumber,minDigitCount)+"."+format;
    return QDir::cleanPath(folderPath+QDir::separator()+fileName);
}

QString RotoCanvas::getSeqFramePath(int frameNumber)
{
    if (this->loadedFI!=nullptr) return RotoCanvas::getSeqFramePath(this->loadedFI->dir().path(), getSeqName(),getSeqDigitCount(),getSeqFormatString());
    else return "";
}

QString RotoCanvas::getZeroPadded(int frameNumber, int minDigitCount)
{
    QString result=QString::number(frameNumber);
    QString zeroString=QString::number(0);
    while (result.length()<minDigitCount) {
        result=zeroString+result;
    }
    return result;
}
//! [0]

//! [1]
bool RotoCanvas::openImage(const QString &fileName)
//! [1] //! [2]
{
    QImage loadedImage;
    if (!loadedImage.load(fileName))
        return false;
    this->outputSize = loadedImage.size();
    if (this->loadedFI!=nullptr) {
        delete this->loadedFI;
        this->loadedFI=nullptr;
    }
    this->loadedFI = new QFileInfo(fileName);

    //this->formatString = loadedFI.suffix();
    QSize newSize = loadedImage.size().expandedTo(size());
    //resizeImage(&loadedImage, this->outputSize);
    resizeImage(&displayImage, newSize); //resizeImage(&)
    //backgroundImage = loadedImage;
    backgroundImage = QImage(loadedImage.size(),QImage::Format_RGB32);

    backgroundImage.fill(Qt::transparent);
    QPainter bgPainter(&backgroundImage);
    bgPainter.drawImage(QPoint(0,0),loadedImage);

    QPainter painter(&displayImage);

    isModified = false;
    while (layerPtrs.length()>0) {
        RotoCanvasLayer* thisLayer=layerPtrs.takeLast();
        if (thisLayer!=nullptr) delete thisLayer;
    }
    QString layersPath=getLayersFolderPath(getSeqFrameNumber(),false);
    QDir layersDir=QDir(layersPath);
    int thisLayerNumber=0;
    QString thisLayerPath=layersDir.filePath(QString::number(thisLayerNumber)+".png");
    QFileInfo thisLayerFI=QFileInfo(thisLayerPath);
    int thisLayerFrameNumber=getSeqFrameNumber();
    while (thisLayerFI.exists()) {
        qInfo()<<"Found layer file: "<<thisLayerPath;
        //QImage newImage(loadedImage.size(), QImage::Format_RGB32);
        //QImage* thisLayerImagePtr=new QImage();
        //thisLayerImagePtr->load(thisLayerPath);
        RotoCanvasLayer* thisLayerPtr=new RotoCanvasLayer();
        thisLayerPtr->frameNumber=thisLayerFrameNumber;
        thisLayerPtr->image.load(thisLayerPath);
        //TODO: seek backward to get image from previous keyframe
        layerPtrs.append(thisLayerPtr);
        painter.drawImage(QPoint(0, 0), thisLayerPtr->image);
        thisLayerNumber++;
        thisLayerPath=layersDir.filePath(QString::number(thisLayerNumber));
        thisLayerFI=QFileInfo(thisLayerPath);
    }
    this->selectedLayerIndex=0;
    update();
    return true;
}
//! [2]

//! [3]
bool RotoCanvas::saveImage(const QString &fileName, const char *fileFormat)
//! [3] //! [4]
{
    QImage visibleImage = displayImage;
    resizeImage(&visibleImage, size());

    if (visibleImage.save(fileName, fileFormat)) {
        isModified = false;
        return true;
    } else {
        return false;
    }
}
//! [4]

//! [5]
void RotoCanvas::setBrushColor(const QColor &newColor)
//! [5] //! [6]
{
    brushColor = newColor;
}
//! [6]

//! [7]
void RotoCanvas::setBrushRadius(double newWidth)
//! [7] //! [8]
{
    double temp_hardness = getBrushHardness();
    brushRadius = newWidth;
    setBrushHardness(temp_hardness); //repair brushHardRadius
}
//! [8]

void RotoCanvas::setBrushHardness(double new_value)
{
    if (new_value>1.0) new_value=1.0;
    else if (new_value<0.0) new_value=0.0f;
    brushHardRadius = brushRadius-(brushRadius*(1.0-new_value));
}

void RotoCanvas::setBrushOpacity(double new_value)
{
    if (new_value>1.0) new_value=1.0;
    else if (new_value<0.0) new_value=0.0f;
    brushOpacity = new_value;
}

//! [9]
void RotoCanvas::clearImage()
//! [9] //! [10]
{
    displayImage.fill(qRgb(255, 255, 255));
    isModified = true;
    update();
}
//! [10]

//! [11]
void RotoCanvas::mousePressEvent(QMouseEvent *event)
//! [11] //! [12]
{
    if (event->button() == Qt::LeftButton) {
        lastPoint = event->pos();
        isToolActive = true;
    }
}

void RotoCanvas::mouseMoveEvent(QMouseEvent *event)
{
    if ((event->buttons() & Qt::LeftButton) && isToolActive)
        drawLineTo(event->pos());
}

void RotoCanvas::mouseReleaseEvent(QMouseEvent *event)
{
    if (event->button() == Qt::LeftButton && isToolActive) {
        drawLineTo(event->pos());
        isToolActive = false;
    }
}

//! [12] //! [13]
void RotoCanvas::paintEvent(QPaintEvent *event)
//! [13] //! [14]
{
    QPainter painter(this);
    QRect dirtyRect = event->rect();
    painter.drawImage(dirtyRect, displayImage, dirtyRect);
}
//! [14]

//! [15]
void RotoCanvas::resizeEvent(QResizeEvent *event)
//! [15] //! [16]
{
    if (width() > displayImage.width() || height() > displayImage.height()) {
        int newWidth = qMax(width() + 128, displayImage.width());
        int newHeight = qMax(height() + 128, displayImage.height());
        resizeImage(&displayImage, QSize(newWidth, newHeight));
        update();
    }
    QWidget::resizeEvent(event);
}
//! [16]

//! [17]
void RotoCanvas::drawLineTo(const QPoint &endPoint)
//! [17] //! [18]
{
    if (outputSize.width()>0&&outputSize.height()>0) {
        if (selectedLayerIndex>=0) {
            QString layersPath=getLayersFolderPath(getSeqFrameNumber(),true);
            QDir layersDir=QDir(layersPath);
            int thisLayerNumber=selectedLayerIndex;
            QString thisLayerPath=layersDir.filePath(QString::number(thisLayerNumber)+".png");
            QFileInfo thisLayerFI=QFileInfo(thisLayerPath);

            while (layerPtrs.length()<selectedLayerIndex+1) {
                RotoCanvasLayer* newLayer;
                newLayer = new RotoCanvasLayer;
                newLayer->frameNumber=getSeqFrameNumber();
                newLayer->image=QImage(outputSize, QImage::Format_RGB32);
                layerPtrs.append(newLayer);
            }
            QPainter painter(&displayImage);
            int rad = (brushRadius) + 2;
            QRect rectBrush = QRect(lastPoint, endPoint).normalized()
                    .adjusted(-rad, -rad, +rad, +rad);
            //QPen pen;
            //pen.setStyle(Qt::SolidLine);
            //pen.setWidth(1);
            //pen.setColor(brushColor);
            painter.setPen(brushColor);
            QColor thisColor;

            QPoint thisPoint;
            brushColor.setAlpha(this->brushOpacity);
            for (int y=rectBrush.top(); y<rectBrush.bottom(); y++) {
                for (int x=rectBrush.left(); x<rectBrush.right(); x++) {
                    //todo: distance from line instead of points
                    if (x>=0 && y>=0) {
                        //thisPoint.setX(x);
                        //thisPoint.setY(y);
                        double this_distance = sqrt(pow(endPoint.x()-x, 2) + pow(endPoint.y()-y, 2));
                        double fade_length = brushRadius-brushHardRadius;
                        double this_opacity = (fade_length>0.0) ? ((brushRadius-this_distance) / fade_length) : ((brushRadius-this_distance) / 0.000001) ;
                        if (this_opacity>1.0) this_opacity=1.0;
                        else if (this_opacity<0.0) this_opacity=0.0;
                        QColor destColor = displayImage.pixelColor(x,y);
                        //do alpha formula (byte)((source-dest)*alpha/255.0f+dest+.5f)
                        int r = (int)((this->brushColor.red()-destColor.red())*this_opacity+destColor.red()+.5); //+.5 for rounding
                        int g = (int)((this->brushColor.green()-destColor.green())*this_opacity+destColor.green()+.5); //+.5 for rounding
                        int b = (int)((this->brushColor.blue()-destColor.blue())*this_opacity+destColor.blue()+.5); //+.5 for rounding
                        int a = (int)((this->brushColor.alpha()-destColor.alpha())*this_opacity+destColor.alpha()+.5); //+.5 for rounding
                        thisColor.setRed(r);
                        thisColor.setGreen(g);
                        thisColor.setBlue(b);
                        thisColor.setAlpha(a);
                        displayImage.setPixelColor(x, y, thisColor);
                        //painter.setOpacity(this_opacity);
                        //painter.drawPoint(x,y);
                    }
                }
            }
            isModified = true;
            update(rectBrush);
            lastPoint = endPoint;
        }
        //else no layer is selected
    }
    //else a dimension is 0--no video loaded
}

void RotoCanvas::fillCheckered(QImage *thisImage)
{
    if (thisImage!=nullptr) {
        //QSize newSize=thisImage->size();
        thisImage->fill(this->checkerDarkColor); //newImage.fill(qRgb(255, 255, 255));
        for (int y=0; y<thisImage->height(); y++) {
            for (int x=0; x<thisImage->width(); x++) {
                //debug optimization: try lines instead of pixel
                if (y%2==1) {
                    if (x%2==1) thisImage->setPixelColor(x, y, this->checkerLightColor);
                }
                else {
                    if ((x+1)%2==1) thisImage->setPixelColor(x, y, this->checkerLightColor);
                }
            }
        }
    }
    else QDebug("fillCheckered Error: thisImage is nullptr");
}
//! [18]

//! [19]
void RotoCanvas::resizeImage(QImage *image, const QSize &newSize)
//! [19] //! [20]
{
    if (image->size() == newSize)
        return;

    QImage newImage(newSize, QImage::Format_RGB32);
    fillCheckered(&newImage);

    QPainter painter(&newImage);
    painter.drawImage(QPoint(0, 0), *image);
    *image = newImage;
}

QImage RotoCanvas::getCacheableImage(QString filePath)
{
    //TODO: load from cache instead if possible
    QImage thisImage(filePath);
    return thisImage;
}
//! [20]

//! [21]
void RotoCanvas::print()
{
#if !defined(QT_NO_PRINTER) && !defined(QT_NO_PRINTDIALOG)
    QPrinter printer(QPrinter::HighResolution);

    QPrintDialog printDialog(&printer, this);
//! [21] //! [22]
    if (printDialog.exec() == QDialog::Accepted) {
        QPainter painter(&printer);
        QRect rect = painter.viewport();
        QSize size = displayImage.size();
        size.scale(rect.size(), Qt::KeepAspectRatio);
        painter.setViewport(rect.x(), rect.y(), size.width(), size.height());
        painter.setWindow(displayImage.rect());
        painter.drawImage(0, 0, displayImage);
    }
#endif // QT_NO_PRINTER
}
//! [22]
