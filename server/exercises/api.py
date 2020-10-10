from exercises.models import Exercise
from rest_framework import viewsets, permissions
from .serializers import ExerciseSerializer

class ExerciseViewSet(viewsets.ModelViewSet):
    # queryset = Workout.objects.all()
    permission_classes = [
        # permissions.AllowAny
        permissions.IsAuthenticated,
    ]

    serializer_class = ExerciseSerializer

    def get_queryset(self):
        return self.request.user.exercises.all()
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)