enum LogLevel {
  Info,
  Warning,
  Error,
}


function logMessage(level:LogLevel, message: string){
  console.log(`${level} ${message}`)
}

logMessage(LogLevel.Info, "<- Este número indica el indice del objeto que viene de Enum, por ende el siguiente será 1")