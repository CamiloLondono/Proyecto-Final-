from rest_framework.viewsets import ModelViewSet
from ropa.api.serializer import RopaSerializer
from ropa.models import Ropa


class RopaApiSet(ModelViewSet):
    serializer_class = RopaSerializer
    def get_queryset(self):
        queryset = Ropa.objects.all()
        diseño = self.request.query_params.get('diseño')
        color = self.request.query_params.get('color')
        if diseño is not None:
            queryset =queryset.filter(diseño=diseño)
        if color is not None:
            queryset =queryset.filter(color=color)
        return queryset