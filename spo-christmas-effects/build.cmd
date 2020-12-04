call cls
call gulp clean
call gulp bundle --ship
call gulp package-solution --ship
copy .\sharepoint\solution\ifx-web-publishing.sppkg .\Releases /y