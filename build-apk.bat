@echo off
set JAVA_HOME=D:\Santo\AndroidStudio\jbr
set PATH=%JAVA_HOME%\bin;%PATH%
cd /d "C:\xampp\htdocs\deltaEntrerriano\android"
call gradlew.bat assembleDebug
echo.
echo === APK generado en: ===
echo android\app\build\outputs\apk\debug\app-debug.apk
pause
