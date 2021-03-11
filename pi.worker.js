// This is a module worker, so we can use imports (in the browser too!)
import { expose as ComlinkExpose } from 'comlink'
import pi from './utils/pi'

const WorkerAPI = {
  pi,
};

ComlinkExpose(WorkerAPI);
