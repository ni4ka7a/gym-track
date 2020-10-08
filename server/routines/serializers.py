from rest_framework import serializers
from routines.models import Routine

class RoutineSerializer(serializers.ModelSerializer):
    # profile = ProfileSerializer()

    class Meta:
        model = Routine
        # fields = ['username', 'email', 'profile']
        # fields = ['name']
        fields = '__all__'

    # def create(self, validated_data):
    #     profile_data = validated_data.pop('profile')
    #     user = User.objects.create(**validated_data)
    #     Profile.objects.create(user=user, **profile_data)
    #     return user