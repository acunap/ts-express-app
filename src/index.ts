import { Server } from '@backend/server';
import { NodeDependencyInjectionDIContainer } from '@backend/dependency-injection/NodeDependencyInjectionDIContainer';
import { DI_TYPES } from '@backend/dependency-injection/DIContainer';

const container = new NodeDependencyInjectionDIContainer();
const server: Server = container.getService(DI_TYPES.Server);

server.start();
