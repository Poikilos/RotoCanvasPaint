QT += widgets
qtHaveModule(printsupport): QT += printsupport

HEADERS       = mainwindow.h \
                rotocanvas.h \
    rotocanvaslayer.h
SOURCES       = main.cpp \
                mainwindow.cpp \
                rotocanvas.cpp \
    rotocanvaslayer.cpp

# install
# target.path = $$[QT_INSTALL_EXAMPLES]/widgets/widgets/scribble

INSTALLS += target
