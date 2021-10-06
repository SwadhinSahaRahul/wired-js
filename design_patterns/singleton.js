const Singleton = (function () {
    function ProcessManager() {
        this.numProcess = 0;
    }

    let pManager;

    function createProcessManager() {
        pManager = new ProcessManager();
        pManager.numProcess++;
        return pManager;
    }

    return {
        getProcessManager: () => {
            if (!pManager) {
                pManager = createProcessManager();
            }
            return pManager;
        }
    }
})();

let processManager = Singleton.getProcessManager();
let processManager1 = Singleton.getProcessManager();

console.log(processManager, processManager1);