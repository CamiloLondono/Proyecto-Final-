from rest_framework.viewsets import ModelViewSet
from biblioteca.api.serializer import BibliotecaSerializer
from biblioteca.models import Biblioteca

class BibliotecaApiSet(ModelViewSet):
    serializer_class = BibliotecaSerializer
    def get_queryset(self):
        queryset = Biblioteca.objects.all()
        titulo = self.request.query_params.get('titulo')
        if titulo is not None:
            queryset =queryset.filter(titulo=titulo)
        return queryset
    
        if autor is not None:
            queryset =queryset.filter(autor=autor)
        return queryset