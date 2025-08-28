@echo off

REM Crear un VBScript simple para ejecutar el comando original sin ventana
REM La carpeta en momentos de prueba se llama "dist" que es el nombre asignado al hacer build con vite/react
echo CreateObject("Wscript.Shell").Run "cmd /c cd /d ""%~dp0"" && if exist dist (node --version >nul 2>&1 && if not errorlevel 1 (start """" ""http://localhost:3000"" && npx serve -s dist -l 3000))", 0, False > "%temp%\run_hidden.vbs"

REM Ejecutar el VBScript
cscript //nologo "%temp%\run_hidden.vbs"

REM Limpiar
del "%temp%\run_hidden.vbs" 2>nul