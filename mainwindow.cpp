#include <QtWidgets>

#include "mainwindow.h"
#include "rotocanvas.h"

//! [0]
MainWindow::MainWindow()
{
    rotocanvas = nullptr;
    vBoxLayout = nullptr;
    statusLineEdit = nullptr;

    bool statusBarEnable=false;

    rotocanvas = new RotoCanvas;

    if (statusBarEnable) {
        vBoxLayout = new QVBoxLayout;
        vBoxLayout->addWidget(rotocanvas,1,Qt::AlignJustify);

        statusLineEdit = new QLineEdit;
        vBoxLayout->addWidget(statusLineEdit,1,Qt::AlignBottom);

        //vBoxLayout->setSizeConstraint(QLayout::);
        setLayout(vBoxLayout);
    }
    else setCentralWidget(rotocanvas);

    createActions();
    createMenus();

    setWindowTitle(tr("RotoCanvas Paint"));
    resize(500, 500);
}
//! [0]

//! [1]
void MainWindow::closeEvent(QCloseEvent *event)
//! [1] //! [2]
{
    if (maybeSave()) {
        event->accept();
    } else {
        event->ignore();
    }
}
//! [2]

//! [3]
void MainWindow::askOpen()
//! [3] //! [4]
{
    if (maybeSave()) {
        qInfo()<<"maybeSave ok so askOpen continues...";
        QString defaultPath=QDir::currentPath();
        //QString tryPath="C:\\Users\\Owner\\Videos\\NTWAOG (Music Video)\\Media\\Sequence 00092 hovering\\00092a";
        QString tryPath="C:\\Users\\Owner\\Videos\\ImageSequenceExamples";
        QDir tryDir=QDir(tryPath);
        if (tryDir.exists()) defaultPath=tryPath;
        QString fileName = QFileDialog::getOpenFileName(this,
                                   tr("Open File"), defaultPath);
        if (!fileName.isEmpty()) {
            qInfo()<<"opening file...";
            rotocanvas->openImage(fileName);
            qInfo()<<"opened.";
        }
        else {
            qInfo()<<"can't open since no name.";
        }
    }
}
//! [4]

//! [5]
void MainWindow::askSave()
//! [5] //! [6]
{
    QAction *action = qobject_cast<QAction *>(sender());
    QByteArray fileFormat = action->data().toByteArray();
    saveFrame();//fileFormat);
}
//! [6]

//! [7]
void MainWindow::askBrushColor()
//! [7] //! [8]
{
    QColor newColor = QColorDialog::getColor(rotocanvas->getBrushColor());
    if (newColor.isValid())
        rotocanvas->setBrushColor(newColor);
}

void MainWindow::askBrushOpacity()
{
    bool ok;
    double new_value = QInputDialog::getDouble(this, tr("RotoCanvas Paint"),
                                        tr("Select brush opacity (0.0 to 1.0):"),
                                        rotocanvas->getBrushOpacity(),
                                        0.0, 1.0, 2, &ok);
    if (ok)
        rotocanvas->setBrushOpacity(new_value);
}
//! [8]

//! [9]
void MainWindow::askBrushRadius()
//! [9] //! [10]
{
    bool ok;
    double new_value = QInputDialog::getDouble(this, tr("RotoCanvas Paint"),
                                        tr("Select brush radius:"),
                                        rotocanvas->getBrushRadius(),
                                        0.0, 1000.0, 2, &ok);
    if (ok)
        rotocanvas->setBrushRadius(new_value);
}
//! [10]

void MainWindow::askBrushHardness()
{
    bool ok;
    double new_value = QInputDialog::getDouble(this, tr("RotoCanvas Paint"),
                                              tr("Select brush hardness (0 to 1):"),
                                              rotocanvas->getBrushHardness(),
                                              0.0, 1.0, 2, &ok);
    if (ok)
        rotocanvas->setBrushHardness(new_value);
}

//! [11]
void MainWindow::about()
//! [11] //! [12]
{
    QMessageBox::about(this, tr("About RotoCanvas Paint"),
            tr("<p><b>RotoCanvas Paint</b> is a manual rotoscoping (frame by "
               "frame painting) application.</p>"
               "<p>Lag when starting to paint is normal due to loading or "
			   "initialization of layers, even though when seeking to a frame "
			   "previously cached, the cached (layerless) frame is initially used.</p>"
               "<p>This program uses the <b>RotoCanvas</b> widget based on the <b>Scribble</b> Qt Example.</p>"));
}
//! [12]

//! [13]
void MainWindow::createActions()
//! [13] //! [14]
{
    openAct = new QAction(tr("&Open..."), this);
    openAct->setShortcuts(QKeySequence::Open);
    connect(openAct, SIGNAL(triggered()), this, SLOT(askOpen()));

    saveFrameAct = new QAction(tr("&Save"), this);
    saveFrameAct->setShortcut(QKeySequence::Save);
    connect(saveFrameAct, SIGNAL(triggered()), this, SLOT(askSave()));

    foreach (QByteArray format, QImageWriter::supportedImageFormats()) {
        QString text = tr("%1...").arg(QString(format).toUpper());

        QAction *action = new QAction(text, this);
        action->setData(format);
        connect(action, SIGNAL(triggered()), this, SLOT(askSave()));
        saveAsActs.append(action);
    }

    printAct = new QAction(tr("&Print..."), this);
    connect(printAct, SIGNAL(triggered()), rotocanvas, SLOT(print()));

    exitAct = new QAction(tr("E&xit"), this);
    exitAct->setShortcuts(QKeySequence::Quit);
    connect(exitAct, SIGNAL(triggered()), this, SLOT(close()));

    brushColorAct = new QAction(tr("&Brush Color..."), this);
    connect(brushColorAct, SIGNAL(triggered()), this, SLOT(askBrushColor()));

    brushWidthAct = new QAction(tr("Brush &Radius..."), this);
    connect(brushWidthAct, SIGNAL(triggered()), this, SLOT(askBrushRadius()));

    brushHardnessAct = new QAction(tr("Brush &Hardness..."), this);
    connect(brushHardnessAct, SIGNAL(triggered()), this, SLOT(askBrushHardness()));

    brushOpacityAct = new QAction(tr("Brush &Opacity..."), this);
    connect(brushOpacityAct, SIGNAL(triggered()), this, SLOT(askBrushOpacity()));

    clearScreenAct = new QAction(tr("&Clear Screen"), this);
    clearScreenAct->setShortcut(tr("Ctrl+L"));
    connect(clearScreenAct, SIGNAL(triggered()),
            rotocanvas, SLOT(clearImage()));

    aboutAct = new QAction(tr("&About"), this);
    connect(aboutAct, SIGNAL(triggered()), this, SLOT(about()));

    aboutQtAct = new QAction(tr("About &Qt"), this);
    connect(aboutQtAct, SIGNAL(triggered()), qApp, SLOT(aboutQt()));
}
//! [14]

//! [15]
void MainWindow::createMenus()
//! [15] //! [16]
{
    saveAsMenu = new QMenu(tr("&Save As"), this);
    foreach (QAction *action, saveAsActs)
        saveAsMenu->addAction(action);

    fileMenu = new QMenu(tr("&File"), this);
    fileMenu->addAction(openAct);
    fileMenu->addAction(saveFrameAct);
    fileMenu->addMenu(saveAsMenu);
    fileMenu->addAction(printAct);
    fileMenu->addSeparator();
    fileMenu->addAction(exitAct);

    optionMenu = new QMenu(tr("&Options"), this);
    optionMenu->addAction(brushColorAct);
    optionMenu->addAction(brushWidthAct);
    optionMenu->addAction(brushHardnessAct);
    optionMenu->addSeparator();
    optionMenu->addAction(clearScreenAct);

    helpMenu = new QMenu(tr("&Help"), this);
    helpMenu->addAction(aboutAct);
    helpMenu->addAction(aboutQtAct);

    menuBar()->addMenu(fileMenu);
    menuBar()->addMenu(optionMenu);
    menuBar()->addMenu(helpMenu);
}
//! [16]

//! [17]
bool MainWindow::maybeSave()
//! [17] //! [18]
{
    if (rotocanvas->getIsModified()) {
       QMessageBox::StandardButton ret;
       ret = QMessageBox::warning(this, tr("RotoCanvas Paint"),
                          tr("The image has been modified.\n"
                             "Do you want to save your changes?"),
                          QMessageBox::Save | QMessageBox::Discard
                          | QMessageBox::Cancel);
        if (ret == QMessageBox::Save) {
            return saveFrame();
        } else if (ret == QMessageBox::Cancel) {
            return false;
        }
    }
    return true;
}
//! [18]

//! [19]
bool MainWindow::saveFrame()  // const QByteArray &fileFormat)
//! [19] //! [20]
{
    return rotocanvas->saveFrame();
}

bool MainWindow::exportSequence()
{
        QByteArray fileFormat("png");
        QString initialPath = QDir::currentPath() + "untitled.png"; //"/untitled." + fileFormat;

        QString fileName = QFileDialog::getSaveFileName(this, tr("Export Image Sequence (#s will be added)"),
                                   initialPath,
                                   tr("%1 Files (*.%2);;All Files (*)")
                                   .arg(QString::fromLatin1(fileFormat.toUpper()))
                                   .arg(QString::fromLatin1(fileFormat)));
        if (fileName.isEmpty()) {
            return false;
        } else {
            QFileInfo frameFI(fileName);
            QString sequenceName=frameFI.completeBaseName(); //baseName gets name such as file from file.tar.gz, so use completeBaseName
            int resultCount=rotocanvas->exportFrames(frameFI.dir(), sequenceName, fileFormat);//(fileName, fileFormat.constData());
            QString msg="Exported "+QString::number(resultCount)+" frame(s).";
            if (resultCount<1) msg="ERROR: "+msg;
            QMessageBox msgBox;
            msgBox.setText("Finished Exporting Image Sequence");
            msgBox.setInformativeText(msg);
            msgBox.setStandardButtons(QMessageBox::Ok); //msgBox.setStandardButtons(QMessageBox::Save | QMessageBox::Discard | QMessageBox::Cancel);
            msgBox.setDefaultButton(QMessageBox::Ok);
            int thisDialogResult=msgBox.exec();
            //if (thisDialogResult==QMessageBox::OK)
        }
}
//! [20]
