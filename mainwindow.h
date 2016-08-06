#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QList>
#include <QMainWindow>
#include <QVBoxLayout>
#include <QLineEdit>

class RotoCanvas;

//! [0]
class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow();

protected:
    void closeEvent(QCloseEvent *event) Q_DECL_OVERRIDE;

private slots:
    void open();
    void save();
    void askBrushColor();
    void askBrushOpacity();
    void askBrushRadius();
    void askBrushHardness();
    void about();

private:
    void createActions();
    void createMenus();
    bool maybeSave();
    bool saveFrame();  // const QByteArray &fileFormat);
    bool exportSequence();

    QVBoxLayout *vBoxLayout;

    RotoCanvas *rotocanvas;
    QLineEdit *statusLineEdit;

    QMenu *saveAsMenu;
    QMenu *fileMenu;
    QMenu *optionMenu;
    QMenu *helpMenu;

    QAction *openAct;
    QAction *saveFrameAct;
    QList<QAction *> saveAsActs;
    QAction *exitAct;
    QAction *brushColorAct;
    QAction *brushWidthAct;
    QAction *brushHardnessAct;
    QAction *brushOpacityAct;
    QAction *printAct;
    QAction *clearScreenAct;
    QAction *aboutAct;
    QAction *aboutQtAct;
};
//! [0]

#endif
