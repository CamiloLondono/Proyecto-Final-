from rest_framework.routers import DefaultRouter
from usuarios.api.views import UsuariosApiSet

router_usuarios = DefaultRouter()
router_usuarios.register(prefix='usuarios', basename='usuarios', viewset=UsuariosApiSet)
