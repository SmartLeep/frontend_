// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, Precio, FechaIn, FechaFin, Habitacion_Id,NumPersonas, cliente) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name,{PrecioFin:Precio, FechaInicio:FechaIn, FechaFinal:FechaFin, Id_Habitaciones:Habitacion_Id, NUMPerson:NumPersonas, idCliente:cliente});
  }
}
export function navigate2(name){
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
}

// add other navigation functions that you need and export them