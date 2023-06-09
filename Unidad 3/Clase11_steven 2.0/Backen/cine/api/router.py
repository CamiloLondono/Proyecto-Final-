from rest_framework.routers import DefaultRouter
from cine.api.views import CineApiSet

router_cine = DefaultRouter()
router_cine.register(prefix='cine', basename='cine', viewset=CineApiSet)