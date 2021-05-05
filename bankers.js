
const OVERALL_RESOURCES = 20;

const PROCESSES = new Map([
    ['1', {
        maxDemand: 8,
        provided: 6
    }],
    ['2', {
        maxDemand: 5,
        provided: 4
    }],
    ['3', {
        maxDemand: 8,
        provided: 2
    }],
    ['4', {
        maxDemand: 7,
        provided: 3
    }]]
)


function bankersAlgorithm(processes, overallResources) {

    let freeOverallResources = overallResources;

    processes
        .forEach(currentProcess=>{
            currentProcess.rest = currentProcess.maxDemand - currentProcess.provided;
            freeOverallResources -= currentProcess.provided;
        })

    const sortedProcesses = [...processes]
        .sort((a, b)=> a[1].rest - b[1].rest);

    sortedProcesses
        .forEach(sortedProcess => {
        if(sortedProcess.rest <= freeOverallResources)
            freeOverallResources += sortedProcess.provided;
    })

    return overallResources === freeOverallResources;

}
bankersAlgorithm(PROCESSES, OVERALL_RESOURCES);
