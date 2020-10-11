from routines.models import Routine
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
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

    # test manually add  exercises
    # @action(detail=False, methods=['PUT'])
    # def exercises(self, request, *args, **kwargs):
    #     routineId = request.GET['id']
    #     routine = Routine.objects.get(id=routineId)

    #     exerciseId = request.data['exerciseId']

    #     routine.exercises.add(exerciseId)
    #     routine.save()

    #     return Response('success')