// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, PrecioValor, Fechain,Fechafin,HabitacionId,Personas) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name,{PrecioFin:PrecioValor, FechaInicio:Fechain, FechaFinal:Fechafin, Id_Habitaciones:HabitacionId, NUMPerson:Personas});
  }
}

// add other navigation functions that you need and export them