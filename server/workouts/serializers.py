from rest_framework import serializers
from workouts.models import Workout

class WorkoutSerializer(serializers.ModelSerializer):
    # profile = ProfileSerializer()

    class Meta:
        model = Workout 
        # fields = ['username', 'email', 'profile']
        # fields = ['name']
        fields = '__all__'

    # def create(self, validated_data):
    #     profile_data = validated_data.pop('profile')
    #     user = User.objects.create(**validated_data)
    #     Profile.objects.create(user=user, **profile_data)
    #     return user