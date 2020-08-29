from workouts.models import Workout
from rest_framework import viewsets, permissions
from .serializers import WorkoutSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = WorkoutSerializer