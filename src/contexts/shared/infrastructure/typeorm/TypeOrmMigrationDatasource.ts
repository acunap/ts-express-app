import { TypeOrmDataSourceFactory } from './TypeOrmDataSourceFactory';
import ConvictConfig from '@backend/config/ConvictConfig';

export default TypeOrmDataSourceFactory.createDataSource(new ConvictConfig());
