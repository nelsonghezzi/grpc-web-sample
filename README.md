# gRPC-web Sample

This repo contains a sample gRPC service and a client application that calls it using gRPC-web.

The gRPC server is built with ASP.NET Core 3.1 and the gRPC-web middleware (`app.UseGrpcWeb()`).

The client app uses Google's gRPC-web implementation and it's bundled with Webpack. The static files are served by another ASP.NET Core app just for convenience.

References:
* [gRPC-web](https://github.com/grpc/grpc-web)
* [Use gRPC in browser apps](https://docs.microsoft.com/en-us/aspnet/core/grpc/browser?view=aspnetcore-3.1)

## Steps to build

1. Install NPM packages:

    ```
    cd src/GrpcClientApp/Client
    npm install
    ```

2. Generate gRPC-web stubs and client (note: `protoc` and `protoc-gen-grpc-web` executables must be discoverable on the PATH):

    ```
    npm run protoc
    ```

3. Create bundle with Webpack:

    ```
    npm run build
    ```

## Steps to run

1. Open a terminal and run the gRPC Server:

    ```
    cd src/GrpcService
    dotnet run
    ```

2. Open another terminal and run the gRPC Client host:

    ```
    cd src/GrpcClientApp
    dotnet run
    ```

3. Open [https://localhost:5002/index.html](https://localhost:5002/index.html) in a web browser and try it!

