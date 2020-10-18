from exercises.models import Exercise, CATEGORY_CHOICES, BODY_PART_CHOICES
from rest_framework import viewsets, permissions
from .serializers import ExerciseSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

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

    @action(detail=False, methods=['GET'])
    def categories(self, request, *args, **kwargs):
        return Response(dict(CATEGORY_CHOICES))

    @action(detail=False, methods=['GET'])
    def bodyparts(self, request, *args, **kwargs):
        return Response(dict(BODY_PART_CHOICES))