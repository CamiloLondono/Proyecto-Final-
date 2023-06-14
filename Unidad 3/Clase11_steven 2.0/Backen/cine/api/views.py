from rest_framework.viewsets import ModelViewSet
from cine.api.serializer import CineSerializer
from cine.models import Cine

class CineApiSet(ModelViewSet):
    serializer_class = CineSerializer
    queryset = Cine.objects.all() 