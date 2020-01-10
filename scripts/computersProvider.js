let computers = []

export const useComputers = () => computers.slice()

export const getComputers = () => fetch("http://localhost:3000/computers")
    .then(res => res.json())
    .then(parsedComputers => computers = parsedComputers)