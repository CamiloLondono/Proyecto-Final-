from rest_framework.viewsets import ModelViewSet
from ropa.api.serializer import RopaSerializer
from ropa.models import Ropa


class RopaApiSet(ModelViewSet):
    serializer_class = RopaSerializer
    queryset = Ropa.objects.all()