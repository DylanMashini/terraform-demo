# AI Chat Plugin

Just a toy project to learn terraform and the poem web framework. 

## Project Structure

### terraform/
``terraform/`` is where all the terraform code deploys the plugin to AWS. Both the plugin and the backend must be built before ``terraform apply`` is run, or it will error. In addition to provisioning resources in AWS, the config also puts DNS rules in Cloudflare to automatically deploy the project. 

### backend/
``backend/`` is where the backend code (written in rust) for the plugin is. Each file is its own lambda function, and it uses poem as the rust web backend. To build these, run the command:

``cargo lambda build --release --output-format zip``

Terraform will automatically detect built functions and deploy them to lambda. 

### plugin/
``plugin/`` is where the frontend of the plugin is. It is written in svelte and compiles to a minified web component. To build this, run ``pnpm run build``.

### website/
```website/``` is the demo website I use for testing. 
