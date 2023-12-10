FROM public.ecr.aws/lambda/nodejs:20

# Copy function code
COPY ./auth ./auth
COPY ./node_modules ./node_modules
COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json
COPY index.js ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "index.handler" ]
