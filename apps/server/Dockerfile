#use bun that is preinstalled in the image to run the server
FROM oven/bun:1 

# set working directory inside the container
WORKDIR /app

# keep tab on the bun.lock file to ensure consistent dependencies across builds
COPY apps/server/package.json ./package.json

# Copy the root lockfile
COPY bun.lock ./

# install dependencies using bun that we imported from the docker image at the first line from oven/bun:1
RUN bun install

# copy the rest of the application code into the container only the server code from apps/server directory
COPY apps/server .

# expose the port that the server will run on 
EXPOSE 5000

# run the server using bun
CMD ["bun", "run", "dev"]