import 'package:flutter_test/flutter_test.dart';
import 'package:networksandcircuits/networksandcircuits.dart';
import 'package:networksandcircuits/networksandcircuits_platform_interface.dart';
import 'package:networksandcircuits/networksandcircuits_method_channel.dart';
import 'package:plugin_platform_interface/plugin_platform_interface.dart';

class MockNetworksandcircuitsPlatform
    with MockPlatformInterfaceMixin
    implements NetworksandcircuitsPlatform {
  @override
  Future<String?> getPlatformVersion() => Future.value('42');
}

void main() {
  final NetworksandcircuitsPlatform initialPlatform = NetworksandcircuitsPlatform.instance;

  test('$MethodChannelNetworksandcircuits is the default instance', () {
    expect(initialPlatform, isInstanceOf<MethodChannelNetworksandcircuits>());
  });

  test('getPlatformVersion', () async {
    Networksandcircuits networksandcircuitsPlugin = Networksandcircuits();
    MockNetworksandcircuitsPlatform fakePlatform = MockNetworksandcircuitsPlatform();
    NetworksandcircuitsPlatform.instance = fakePlatform;

    expect(await networksandcircuitsPlugin.getPlatformVersion(), '42');
  });
}
