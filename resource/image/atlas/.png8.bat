for /r . %%i in (*.png) do (
pngquant %%i --ext .png --force
)
pause