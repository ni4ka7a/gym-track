from routines.models import Routine
from rest_framework import viewsets, permissions
from .serializers import RoutineSerializer

class RoutineViewSet(viewsets.ModelViewSet):
    # queryset = Workout.objects.all()
    permission_classes = [
        # permissions.AllowAny
        permissions.IsAuthenticated,
    ]

    serializer_class = RoutineSerializer

    def get_queryset(self):
        return self.request.user.routines.all()
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)