from workouts.models import Workout
from rest_framework import viewsets, permissions
from .serializers import WorkoutSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    # queryset = Workout.objects.all()
    permission_classes = [
        # permissions.AllowAny
        permissions.IsAuthenticated,
    ]

    serializer_class = WorkoutSerializer

    def get_queryset(self):
        return self.request.user.workouts.all()
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)