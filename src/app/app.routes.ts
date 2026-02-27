import { Routes } from '@angular/router';
import { DeviceList } from './components/device-list/device-list';
import { CreateDevice } from './components/create-device/create-device';
import { ShelfPositions } from './components/shelf-positions/shelf-positions';

export const routes: Routes = [
    {
        path: '',
        component: DeviceList
    },
    {
        path: 'get-devices',
        component: DeviceList
    },
    {
        path: 'create-device',
        component: CreateDevice
    },
    {
        path: 'view-shelf-positions/:deviceId',
        component: ShelfPositions,
    }
];
