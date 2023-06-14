from rest_framework.viewsets import ModelViewSet
from cine.api.serializer import CineSerializer
from cine.models import Cine

class CineApiSet(ModelViewSet):
    serializer_class = CineSerializer
    def get_queryset(self):
        queryset = Cine.objects.all()
        sala = self.request.query_params.get('sala')
        asiento = self.request.query_params.get('asiento')
        if sala is not None:
            queryset =queryset.filter(sala=sala)
        if asiento is not None:
            queryset =queryset.filter(asiento=asiento)
        return queryset