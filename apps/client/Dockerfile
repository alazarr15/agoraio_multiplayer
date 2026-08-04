#use bun that is preinstalled in the image to run the server
FROM oven/bun:1 

# set working directory inside the container
WORKDIR /app

# keep tab on the bun.lock file to ensure consistent dependencies across builds
COPY apps/client/package.json ./package.json

# Copy the root lockfile
COPY bun.lock ./

# install dependencies using bun that we imported from the docker image at the first line from oven/bun:1
RUN bun install

# copy the rest of the application code into the container only the client code from apps/client directory
COPY apps/client .

# expose the port that the client will run on 
EXPOSE 3000

# run the client using bun
CMD ["bun", "run", "dev"]