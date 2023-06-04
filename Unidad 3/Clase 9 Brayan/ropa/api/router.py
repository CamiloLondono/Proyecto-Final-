from rest_framework.routers import DefaultRouter
from ropa.api.views import RopaApiSet

router_ropa = DefaultRouter()
router_ropa.register(prefix='ropa', basename='ropa', viewset=RopaApiSet)
