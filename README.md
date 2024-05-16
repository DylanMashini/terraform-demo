# AI Chat App Monorepo

This is the monorepo for my currently unnamed Chat Plugin. Here are all the available modules:

## terraform/
``terraform/`` is where all the terraform code goes to deploy the plugin to AWS. Both the plugin and the backend must be built before ``terraform apply`` is run, or it will error. 

## backend/
``backend/`` is where the backend code (written in rust) for the plugin is. Each file is its own lambda function, and it uses poem as the rust web backend. To build these, run the command:

``cargo lambda build --release --output-format zip``

Terraform will automatically detect built functions and deploy them to lambda. 

## plugin/
``plugin/`` is where the frontend of the plugin is. It is written in svelte and compiles to a minified web component. To build this, run ``pnpm run build``.

