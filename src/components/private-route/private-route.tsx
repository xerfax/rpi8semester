//Добавим компонент приватного маршрута. В папке components создадим папку private-route, и в ней файл private-route.tsx.

// Код проверяет, авторизован ли пользователь. Если авторизован, отрисовывает переданный компонент (children). 
// Если не авторизован, перенаправляет (Navigate) на страницу входа (/login).

import { Navigate } from "react-router-dom";  //Navigate — компонент для перенаправления пользователя на другой маршрут (редирект).
import { PropsWithChildren } from "react";  //PropsWithChildren — тип для пропсов, который позволяет передавать вложенные компоненты (children).
import { AppRoute, AuthorizationStatus } from "../../const";  //AppRoute — объект с маршрутами (/login, /favorites и т. д.).AuhorizationStatus — объект с возможными статусами авторизации (Auth, NoAuth).

type AuthorizationStatusEnum =
  (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];

type PrivateRouteProps = {
    authorizationStatus: AuthorizationStatusEnum;
};

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>) {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}
export { PrivateRoute };
