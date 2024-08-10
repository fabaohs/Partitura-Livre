## JUST GEN THE PUBLISHED APP
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out

## TAKES THE PUBLISHED FILES AND PUTS THEM INTO A NEW IMAGE
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS runtime
WORKDIR /runtime-app
COPY --from=build-env /app/out .

EXPOSE 5000:5000
ENTRYPOINT [ "dotnet", "backend.dll" ]