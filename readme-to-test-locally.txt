To link:
cd into package_folder:
npm link
cd into project_folder_that_uses_package:
npm link package_name

To unlink:
cd into project_folder_that_uses_package:
npm unlink package_name
cd into package_folder:
npm unlink

Though not strictly necessary, you may get warnings from npm regarding the following if not present:
npm WARN my-app No description
npm WARN my-app No repository field.
npm WARN my-app No README data
npm WARN my-app No license field.
