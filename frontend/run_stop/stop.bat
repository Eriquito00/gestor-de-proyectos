@echo off

REM Crear un VBScript para detener el servidor sin mostrar ventana
echo CreateObject("Wscript.Shell").Run "cmd /c taskkill /f /im node.exe >nul 2>&1 && taskkill /f /im npx.exe >nul 2>&1 && echo Servidor detenido", 0, False > "%temp%\stop_server.vbs"

REM Ejecutar el VBScript
cscript //nologo "%temp%\stop_server.vbs"

REM Limpiar
del "%temp%\stop_server.vbs" 2>nul