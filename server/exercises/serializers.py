from rest_framework import serializers
from exercises.models import Exercise

class ExerciseSerializer(serializers.ModelSerializer):
    # profile = ProfileSerializer()

    class Meta:
        model = Exercise
        # fields = '__all__'
        fields = ("id", "name", "description", "routines", "created_at", "author")
        extra_kwargs = {'routines': {'required': False}}

    # def create(self, validated_data):
    #     profile_data = validated_data.pop('profile')
    #     user = User.objects.create(**validated_data)
    #     Profile.objects.create(user=user, **profile_data)
    #     return user