from rest_framework import serializers
from routines.models import Routine
from exercises.serializers import ExerciseSerializer

class RoutineSerializer(serializers.ModelSerializer):
    exercises = ExerciseSerializer(read_only=True, many=True)

    class Meta:
        model = Routine
        # fields = '__all__'
        fields = ("id", "name", "description", "exercises", "created_at", "author")
        extra_kwargs = {'exercises': {'required': False}}

    # def create(self, validated_data):
    #     profile_data = validated_data.pop('profile')
    #     user = User.objects.create(**validated_data)
    #     Profile.objects.create(user=user, **profile_data)
    #     return user