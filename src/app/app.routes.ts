import { Routes } from '@angular/router';
import { DeviceList } from './components/device-list/device-list';
import { CreateDevice } from './components/create-device/create-device';
import { ShelfPositions } from './components/shelf-positions/shelf-positions';
import { CreateShelf } from './components/create-shelf/create-shelf';
import { UpdateDevice } from './components/update-device/update-device';
import { UpdateShelf } from './components/update-shelf/update-shelf';

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
        path: 'view-shelf-positions',
        component: ShelfPositions,
    },
    {
        path: 'create-shelf',
        component: CreateShelf
    },
    {
        path:'update-device',
        component:UpdateDevice
    },
    {
        path: 'update-shelf',
        component: UpdateShelf
    }
];
