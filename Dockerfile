#FROM nginx
## Step 1:
# Create a working directory
WORKDIR /capstone
## Step 2:
# Copy source code to working directory
COPY . index.html /capstone/
